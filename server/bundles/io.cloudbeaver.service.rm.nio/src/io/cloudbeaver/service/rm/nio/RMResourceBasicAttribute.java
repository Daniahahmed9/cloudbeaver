/*
 * DBeaver - Universal Database Manager
 * Copyright (C) 2010-2023 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.cloudbeaver.service.rm.nio;

import org.jkiss.code.NotNull;
import org.jkiss.dbeaver.model.nio.NIOFileBasicAttribute;
import org.jkiss.dbeaver.model.rm.RMResource;

import java.nio.file.attribute.FileTime;

public class RMResourceBasicAttribute extends NIOFileBasicAttribute {

    @NotNull
    private final RMResource rmResource;

    public RMResourceBasicAttribute(@NotNull RMResource rmResource) {
        this.rmResource = rmResource;
    }

    @Override
    public FileTime lastModifiedTime() {
        return FileTime.fromMillis(rmResource.getLastModified());
    }

    @Override
    public boolean isDirectory() {
        return rmResource.isFolder();
    }

    @Override
    public long size() {
        return rmResource.getLength();
    }
}
