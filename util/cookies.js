import Cookies from 'js-cookie';

export function incrementVisitsCookies(visitsCookieValue, singleWatch) {
  const idInArray = visitsCookieValue.some(
    (singleWatchVisits) => singleWatchVisits.singleWatch === singleWatch,
  );
  selected;

  if (!idInArray) {
    return [
      ...visitsCookieValue,
      {
        singleWatch: singleWatch,
        watches: 1,
      },
    ];
  }

  return visitsCookieValue.map((singleWatchVisits) => {
    if (singleWatch === singleWatchVisits.singleWatch) {
      singleWatchVisits.cookiesNumClientSite =
        singleWatchVisits.cookiesNumClientSite + 1;
    }
    return singleWatchVisits;
  });
}

export function setVisitsCookieClientSide(newCookiesNumClientSite) {
  Cookies.set('watches', newCookiesNumClientSite);
}
