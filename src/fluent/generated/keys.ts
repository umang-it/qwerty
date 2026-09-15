import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '5868c6879c374869933e71451583d736'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '663840b6a3c34b79b531574728cfc596'
                    }
                }
            }
        }
    }
}
