import { NextResponse, type NextRequest } from "next/server";

const LOCALE_SEEN_COOKIE = "diketa_locale_seen";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

type Locale = "es" | "en";

function preferredSupportedLocale(acceptLanguage: string | null): Locale | null {
  if (!acceptLanguage) {
    return null;
  }

  const languages = acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [rawLanguage, ...parameters] = entry.trim().split(";");
      const language = rawLanguage?.toLowerCase();
      const qParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
      const q = qParameter ? Number(qParameter.trim().slice(2)) : 1;

      return {
        index,
        language,
        q: Number.isFinite(q) ? q : 0,
      };
    })
    .filter((entry) => entry.language)
    .sort((left, right) => right.q - left.q || left.index - right.index);

  for (const entry of languages) {
    if (entry.language === "en" || entry.language?.startsWith("en-")) {
      return "en";
    }

    if (entry.language === "es" || entry.language?.startsWith("es-")) {
      return "es";
    }
  }

  return null;
}

function responseWithLocale(request: NextRequest, locale: Locale) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-diketa-locale", locale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (!request.cookies.has(LOCALE_SEEN_COOKIE)) {
    response.cookies.set(LOCALE_SEEN_COOKIE, "1", {
      maxAge: COOKIE_MAX_AGE_SECONDS,
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale: Locale = pathname === "/en" ? "en" : "es";

  if (
    pathname === "/" &&
    !request.cookies.has(LOCALE_SEEN_COOKIE) &&
    preferredSupportedLocale(request.headers.get("accept-language")) === "en"
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/en";

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(LOCALE_SEEN_COOKIE, "1", {
      maxAge: COOKIE_MAX_AGE_SECONDS,
      path: "/",
      sameSite: "lax",
    });

    return response;
  }

  return responseWithLocale(request, locale);
}

export const config = {
  matcher: ["/", "/en"],
};
