/* eslint-disable @typescript-eslint/no-explicit-any */
export function makeParamsUrl(url: string, params: any): string {
   let paramsString = "";

   if (!params) {
      return url;
   }

   Object.keys(params).forEach((key) => {
      if (params[key]) {
         paramsString += `/${encodeURIComponent(params[key])}`;
      }
   });

   if (!paramsString) {
      return url;
   }

   return url + paramsString;
}
