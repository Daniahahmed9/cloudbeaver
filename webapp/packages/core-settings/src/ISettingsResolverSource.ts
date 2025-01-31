/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2023 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */
import type { ISettingsSource } from './ISettingsSource';

export interface ISettingsResolverSource extends ISettingsSource {
  hasResolver: (resolver: ISettingsSource) => boolean;
  addResolver: (resolver: ISettingsSource) => void;
  removeResolver: (resolver: ISettingsSource) => void;
}
