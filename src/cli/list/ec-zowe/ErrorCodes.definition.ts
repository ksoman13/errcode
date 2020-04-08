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

import { ICommandDefinition } from "@zowe/imperative";
export const ErrorCodesDefinition: ICommandDefinition = {
    name: "ec-zowe",
    aliases: ["ecz"],
    summary: "Lists Error Codes for MF",
    description: "List Error Codes REST sample data",
    type: "command",
    handler: __dirname + "/ErrorCodes.handler",
    options: [
        {
            name: "ECode",
            description: "Error Codes details w.r.t to error code",
            type: "number"
        },
        {
            name: "EApp",
            description: "The list of Error Codes for applciation such as VSAM, DB2.",
            type: "string"
        }
    ]
};
