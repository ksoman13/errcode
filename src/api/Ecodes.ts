/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { IErrCodes } from "./doc/IErrCodes";
import { RestClient, AbstractSession, ImperativeExpect, Logger } from "@zowe/imperative";

export class Ecodes {

    // public static readonly EC_URI = "/ecodes";

    public static getECode(ECode: number) {
        // Logger.getAppLogger().trace("Ecodes.getECodes() called with code " + ECode);
        // ImperativeExpect.toNotBeNullOrUndefined(ECode, "ECode must be provided");
        const resource = ECode;
        return resource;
    }

    public static getEApp(EApp: string) {
        // Logger.getAppLogger().trace("Ecodes.getECodes() called with code " + ECode);
        // ImperativeExpect.toNotBeNullOrUndefined(ECode, "ECode must be provided");
        const resa = EApp;
        return resa;
    }
}

