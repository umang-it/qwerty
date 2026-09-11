import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['e16996131539424c93a0fedd1bd5e744'],
    name: 'hellorohit',
    script: Now.include('./sys_script_include_e16996131539424c93a0fedd1bd5e744.server.js'),
    description: 'Reusable server-side logic for the popular application.',
    apiName: 'x_popular.hellorohit',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
