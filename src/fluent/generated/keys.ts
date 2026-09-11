import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '6e947047e6f54c9eb0f62bb607d0e293'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '912975aabbb04720ba30a767c4742bcc'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '1d2df16d7a88403f8feaca0933a16332'
                        key: {
                            name: 'x_popular_name'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '21da7d4dff5b03101a8cffffffffff68'
                        key: {
                            name: 'x_popular_name'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '37a741f8f0044c1c9936692b4235ede7'
                        key: {
                            name: 'x_popular_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac62a379bf7e45e49bd1b2d968a9cd8a'
                        key: {
                            name: 'x_popular_name'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8876d7d1ec94e7da001232203113634'
                        key: {
                            name: 'x_popular_name'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'daccd60c45ae44239e0fa07725913e5e'
                        key: {
                            name: 'x_popular_name'
                            element: 'name'
                        }
                    },
                ]
            }
        }
    }
}
