var group__nand__interface__gr =
[
    [ "NAND Status Error Codes", "group__nand__execution__status.html", "group__nand__execution__status" ],
    [ "NAND Events", "group__NAND__events.html", "group__NAND__events" ],
    [ "NAND Flags", "group__nand__driver__flag__codes.html", null ],
    [ "NAND Control Codes", "group__nand__control__gr.html", "group__nand__control__gr" ],
    [ "NAND ECC Codes", "group__nand__driver__ecc__codes.html", "group__nand__driver__ecc__codes" ],
    [ "NAND Sequence Execution Codes", "group__nand__driver__seq__exec__codes.html", "group__nand__driver__seq__exec__codes" ],
    [ "ARM_NAND_STATUS", "group__nand__interface__gr.html#structARM__NAND__STATUS", [
      [ "busy", "group__nand__interface__gr.html#a50c88f3c1d787773e2ac1b59533f034a", null ],
      [ "ecc_error", "group__nand__interface__gr.html#a7707d2200a3bf8f49b148ffc8ded7636", null ],
      [ "reserved", "group__nand__interface__gr.html#aa43c4c21b173ada1b6b7568956f0d650", null ]
    ] ],
    [ "ARM_DRIVER_NAND", "group__nand__interface__gr.html#structARM__DRIVER__NAND", [
      [ "GetVersion", "group__nand__interface__gr.html#a30afd9cb3113c037b5f1926f5ef93b59", null ],
      [ "GetCapabilities", "group__nand__interface__gr.html#a56a1554cd7d22db9722b57158199375a", null ],
      [ "Initialize", "group__nand__interface__gr.html#a3512517305771fb33b97f35995651a6c", null ],
      [ "Uninitialize", "group__nand__interface__gr.html#a5ce2b3d7a3a07099bf07d1eb253e92e3", null ],
      [ "PowerControl", "group__nand__interface__gr.html#a24ebae5c6011631f76027f9a16eaf5ce", null ],
      [ "DevicePower", "group__nand__interface__gr.html#ab0d47822a67e9a3a26ff8e25116503dd", null ],
      [ "WriteProtect", "group__nand__interface__gr.html#a7814b68214a9fbf6057192d470ecb83f", null ],
      [ "ChipEnable", "group__nand__interface__gr.html#accb8cf48aaaa2b5a5ddc981d7190ab85", null ],
      [ "GetDeviceBusy", "group__nand__interface__gr.html#a517db927578ec5d83e78aa39793b341f", null ],
      [ "SendCommand", "group__nand__interface__gr.html#a4e799428ec20f3a111d525bda2a665d3", null ],
      [ "SendAddress", "group__nand__interface__gr.html#a2ce82feccad9747bfd885051a3032fc2", null ],
      [ "ReadData", "group__nand__interface__gr.html#a3bc463f127739cd4b8bb9a86412c979e", null ],
      [ "WriteData", "group__nand__interface__gr.html#a3a45bc07b4b3819685f18dcc3dfafba8", null ],
      [ "ExecuteSequence", "group__nand__interface__gr.html#a0e32c33a15408dba23342d96c2bdc895", null ],
      [ "AbortSequence", "group__nand__interface__gr.html#ae2b2dae64beb0d8931c2590cccb4e24a", null ],
      [ "Control", "group__nand__interface__gr.html#aee024bcbc25fe704bd2d85ce1dccb8db", null ],
      [ "GetStatus", "group__nand__interface__gr.html#a4cc6c149ca86871ffcc292e4143a3792", null ],
      [ "InquireECC", "group__nand__interface__gr.html#afb64d95bec5cd74ff8b15044ce94bc93", null ]
    ] ],
    [ "ARM_NAND_CAPABILITIES", "group__nand__interface__gr.html#structARM__NAND__CAPABILITIES", [
      [ "event_device_ready", "group__nand__interface__gr.html#a5f347e9b63764bbb657f52dc20682128", null ],
      [ "reentrant_operation", "group__nand__interface__gr.html#ae0514834750c7452431717a881471e2b", null ],
      [ "sequence_operation", "group__nand__interface__gr.html#afa4b798731b1154878c26dda3f090acf", null ],
      [ "vcc", "group__nand__interface__gr.html#a35cfa22b2140b109fe24b97c42d5a5ed", null ],
      [ "vcc_1v8", "group__nand__interface__gr.html#a0e7d3b9258d468492b22de55d855a06e", null ],
      [ "vccq", "group__nand__interface__gr.html#ab1cdfce6eb051bed7b904e0fd1719afa", null ],
      [ "vccq_1v8", "group__nand__interface__gr.html#a1896a7548bb6fab285f23cc0d0b23d7d", null ],
      [ "vpp", "group__nand__interface__gr.html#a75b97f7c917bba90b2f5c747d6857d23", null ],
      [ "wp", "group__nand__interface__gr.html#afe7f5b149b8d92859398315b1ad31ddc", null ],
      [ "ce_lines", "group__nand__interface__gr.html#ad5dd0fcdd7f6d5e5cd739f73323a2b11", null ],
      [ "ce_manual", "group__nand__interface__gr.html#a2b8044d986995b183b057217643466bf", null ],
      [ "rb_monitor", "group__nand__interface__gr.html#a69f5e734ee4a9bb501718cf78a740c3e", null ],
      [ "data_width_16", "group__nand__interface__gr.html#a0f22baea13daa9101bf6fc1fdfddc747", null ],
      [ "ddr", "group__nand__interface__gr.html#aa9acfde38637fe749aa9271c0a8dae1a", null ],
      [ "ddr2", "group__nand__interface__gr.html#ae086693990cbd5d628014c0fcc7c1f2c", null ],
      [ "sdr_timing_mode", "group__nand__interface__gr.html#a21036f2047273d90c0af0e97031df5a9", null ],
      [ "ddr_timing_mode", "group__nand__interface__gr.html#a00c1f5db7d7c4abe7556733c36da7783", null ],
      [ "ddr2_timing_mode", "group__nand__interface__gr.html#a6d9b66da0e56d04d545e0bb6841891b2", null ],
      [ "driver_strength_18", "group__nand__interface__gr.html#ae672b2a65dd3d0b93812c088491c4552", null ],
      [ "driver_strength_25", "group__nand__interface__gr.html#ae87c19872b838dac7d3136a3fd466f6a", null ],
      [ "driver_strength_50", "group__nand__interface__gr.html#aef3d6e1522a6cf7fb87fd113dcd43ad5", null ],
      [ "reserved", "group__nand__interface__gr.html#aa43c4c21b173ada1b6b7568956f0d650", null ]
    ] ],
    [ "ARM_NAND_ECC_INFO", "group__nand__interface__gr.html#structARM__NAND__ECC__INFO", [
      [ "type", "group__nand__interface__gr.html#ad44b615021ed3ccb734fcaf583ef4a03", null ],
      [ "page_layout", "group__nand__interface__gr.html#a5952ba4313bda7833fefd358f5aff979", null ],
      [ "page_count", "group__nand__interface__gr.html#aa993bc236650aa405b01d00b7ca72904", null ],
      [ "page_size", "group__nand__interface__gr.html#a9dd3e47e968a8f6beb5d88c6d1b7ebe9", null ],
      [ "reserved", "group__nand__interface__gr.html#aa43c4c21b173ada1b6b7568956f0d650", null ],
      [ "correctable_bits", "group__nand__interface__gr.html#ae65f920c4ad99fd0c6bdf5fd8c4d161a", null ],
      [ "codeword_size", "group__nand__interface__gr.html#ae8cff208d9efb5067d38ced675916c66", null ],
      [ "ecc_size", "group__nand__interface__gr.html#a22365f6a2af1171a1c3629c8ae5fe001", null ],
      [ "ecc_offset", "group__nand__interface__gr.html#a22d6a1813a47a7044f7acb478f8e9eb8", null ],
      [ "virtual_page_size", "group__nand__interface__gr.html#aa270f95e67fdf1e9137c61f2045b7636", null ],
      [ "codeword_offset", "group__nand__interface__gr.html#a31c5b0e899b2d60adb6cdef971633db0", null ],
      [ "codeword_gap", "group__nand__interface__gr.html#ae0a2b8415bddd99dade9cbcf8c52186a", null ],
      [ "ecc_gap", "group__nand__interface__gr.html#a94d6b62b24d96ff83c985325d8825dd3", null ]
    ] ],
    [ "ARM_NAND_SignalEvent_t", "group__nand__interface__gr.html#ga09f4cf2f2df0bb690bce38b13d77e50f", null ],
    [ "ARM_NAND_GetVersion", "group__nand__interface__gr.html#ga01255fd4f15e7fa4751c7ea59648ef5a", null ],
    [ "ARM_NAND_GetCapabilities", "group__nand__interface__gr.html#ga9f2609975c2008d21b9ae28f15daf147", null ],
    [ "ARM_NAND_Initialize", "group__nand__interface__gr.html#ga74ad34718a595e7a4375b90f33e72750", null ],
    [ "ARM_NAND_Uninitialize", "group__nand__interface__gr.html#gaa788b638ab696b166fee2f4a4bc8d97a", null ],
    [ "ARM_NAND_PowerControl", "group__nand__interface__gr.html#ga9c9975637980b5d42db7baba0191fda1", null ],
    [ "ARM_NAND_DevicePower", "group__nand__interface__gr.html#ga11adcbaaace09746581a36befbd563c9", null ],
    [ "ARM_NAND_WriteProtect", "group__nand__interface__gr.html#ga1987e65a4e756d748db86332c9fb1cec", null ],
    [ "ARM_NAND_ChipEnable", "group__nand__interface__gr.html#ga1c0cba87cb7b706ad5986dc67c831ad1", null ],
    [ "ARM_NAND_GetDeviceBusy", "group__nand__interface__gr.html#ga43011066306bd716b580e6aa9a80cf65", null ],
    [ "ARM_NAND_SendCommand", "group__nand__interface__gr.html#ga9f70b89ba478eadfe7f5dee7453a4fb7", null ],
    [ "ARM_NAND_SendAddress", "group__nand__interface__gr.html#ga00e195031e03d364db7595858a7e76f3", null ],
    [ "ARM_NAND_ReadData", "group__nand__interface__gr.html#gae1899a20ef107400c8bf84fad477a8ce", null ],
    [ "ARM_NAND_WriteData", "group__nand__interface__gr.html#ga1fa497dd51a86fc308e946b4419fd006", null ],
    [ "ARM_NAND_ExecuteSequence", "group__nand__interface__gr.html#ga8a0108dba757a4610475151144b52825", null ],
    [ "ARM_NAND_AbortSequence", "group__nand__interface__gr.html#ga00832861f018db0d8368900b099ecd30", null ],
    [ "ARM_NAND_Control", "group__nand__interface__gr.html#ga83061d6d53ffb148853efbc87a864607", null ],
    [ "ARM_NAND_GetStatus", "group__nand__interface__gr.html#ga4578642f37a556b58b0bba0ad5d42641", null ],
    [ "ARM_NAND_InquireECC", "group__nand__interface__gr.html#gac21425454d586ef48fdfc35e7bd78947", null ],
    [ "ARM_NAND_SignalEvent", "group__nand__interface__gr.html#gaf4ce80b0fd6717de7ddfb1cfaf7dd754", null ]
];