initSidebarItems({"fn":[["fs_deref","\"Dereferences\" the fs register at offset 0."],["gs_deref","\"Dereferences\" the gs register at offset 0."],["load_cs","Reload code segment register. Note this is special since we can not directly move to %cs. Instead we push the new segment selector and return value on the stack and use lretq to reload cs and continue at 1:."],["rdfsbase","Read FS Segment Base Needs FSGSBASE-Enable Bit (bit 16 of CR4) set."],["rdgsbase","Read GS Segment Base Needs FSGSBASE-Enable Bit (bit 16 of CR4) set."],["swapgs","Swap the GS register."],["wrfsbase","Write FS Segment Base Needs FSGSBASE-Enable Bit (bit 16 of CR4) set."],["wrgsbase","Write GS Segment Base Needs FSGSBASE-Enable Bit (bit 16 of CR4) set."]],"struct":[["Descriptor64","Entry for IDT, GDT or LDT."]]});