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

import { ICommandHandler, IHandlerParameters, TextUtils, Session } from "@zowe/imperative";
import { Ecodes } from "../../../api/Ecodes";
import { sqlerrcodes, sqlerrcodes_dat} from "../../../../node_modules/npm-ecpkg";

export default class ErrCodeHandler implements ICommandHandler {
    public async process(params: IHandlerParameters): Promise<void> {
        if (params.arguments.ECode) {
            const zerrcod = Ecodes.getECode(params.arguments.ECode);
            sqlerrcodes(zerrcod, (err, result) => {
                if (err) {
                    // error handling code goes here
                    params.response.console.log("ERROR : ", err);
                }
                else {
                    // code to execute on data retrieval
                    params.response.console.log("Error Code ", zerrcod, "corresponds to ", result.ErrTyp, ", Error Desc: ", result.err_desc);
                }
            });
        } else {
            if (params.arguments.EApp) {
                const zerrapp = Ecodes.getEApp(params.arguments.EApp);
                sqlerrcodes_dat(zerrapp, (err, resak) => {
                    if (err) {
                        // error handling code goes here
                        params.response.console.log("eapp : ", err); }
                    else {
                        // code to execute on data retrieval
                        params.response.console.log("App ", zerrapp, "corresponds to Error Code", resak.code, ", Error Desc: ", resak.err_desc);
                        }
                });
            };
        }
    };
}