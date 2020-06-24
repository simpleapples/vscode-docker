/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { DockerObject } from './Common';

export interface DockerImage extends DockerObject {
    foo?: string;
    // readonly repository: string;
}

export interface DockerImageInspection extends DockerObject {
    readonly Config?: {
        readonly ExposedPorts?: { readonly [portAndProtocol: string]: unknown; };
    };
}