// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
    baseUrl: window["env"]["baseUrl"],
    stepsToRoot : 4,
    stopRefreshing : false,
    isShowingProgress : false,
    deploymentType :'VSMF/NSMF'
 };