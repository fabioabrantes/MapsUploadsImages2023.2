export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      OrphanagesMap: undefined;
      SelectMapPosition: undefined;
      OrphanageDetails: {id:number};
      OrphanageData:{
        position: {
          latitude:number; 
          longitude: number;
        }
      }
    }
  }
}