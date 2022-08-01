/* eslint-disable @typescript-eslint/no-explicit-any */
export function makeQueryUrl(url: string, query: any): string {
   let queryString = "";

   if (!query) {
      return url;
   }

   Object.keys(query).forEach((key) => {
      if (query[key]) {
         queryString += `&${key}=${encodeURIComponent(query[key])}`;
      }
   });

   if (!queryString) {
      return url;
   }
   return `${url}?${queryString}`;
}
