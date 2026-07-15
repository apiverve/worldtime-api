declare module '@apiverve/worldtime' {
  export interface worldtimeOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface worldtimeResponse {
    status: string;
    error: string | null;
    data: WorldTimeData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface WorldTimeData {
      search:      null | string;
      foundCities: FoundCity[];
  }
  
  interface FoundCity {
      city:       null | string;
      cityASCII:  null | string;
      country:    null | string;
      iso2:       null | string;
      iso3:       null | string;
      province:   null | string;
      timezone:   null | string;
      time:       null | string;
      time24:     null | string;
      time12:     null | string;
      date:       Date | null;
      day:        null | string;
      month:      null | string;
      year:       null | string;
      unix:       null | string;
      dst:        boolean | null;
      dstStart:   Date | null;
      dstEnd:     Date | null;
      dstName:    null | string;
      stateANSI?: null | string;
  }

  export default class worldtimeWrapper {
    constructor(options: worldtimeOptions);

    execute(callback: (error: any, data: worldtimeResponse | null) => void): Promise<worldtimeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: worldtimeResponse | null) => void): Promise<worldtimeResponse>;
    execute(query?: Record<string, any>): Promise<worldtimeResponse>;
  }
}
