/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2023 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled, { css } from 'reshadow';

import { ColoredContainer, Container, useStyles } from '@cloudbeaver/core-blocks';
import { useService } from '@cloudbeaver/core-di';
import { SettingsManagerService } from '@cloudbeaver/core-settings';

import { SettingsGroup } from './SettingsGroup';

const styles = css`
  content {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
`;

export const SettingsPanelForm = observer(function SettingsPanelForm() {
  const style = useStyles(styles);

  const settingsManagerService = useService(SettingsManagerService);
  const groups = Array.from(settingsManagerService.groups.values());

  return styled(style)(
    <content>
      <ColoredContainer gap overflow parent>
        <Container medium gap vertical overflow>
          {groups.map(group => (
            <SettingsGroup key={group.id} group={group} />
          ))}
        </Container>
      </ColoredContainer>
    </content>,
  );
});
