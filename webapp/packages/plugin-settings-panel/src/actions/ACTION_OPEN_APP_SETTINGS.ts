/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2023 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */
import { createAction } from '@cloudbeaver/core-view';

export const ACTION_OPEN_APP_SETTINGS = createAction('open-app-settings', {
  label: 'settings_panel',
  tooltip: 'settings_panel',
});
