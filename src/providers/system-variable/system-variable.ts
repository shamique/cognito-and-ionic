import { Injectable } from "@angular/core";

@Injectable()
export class SystemVariableProvider {
  public SYSTEM_PARAMS = {
    REGION: "",
    COGNITO_POOL: {
      UserPoolId: "",
      ClientId: ""
    }
  };
}
