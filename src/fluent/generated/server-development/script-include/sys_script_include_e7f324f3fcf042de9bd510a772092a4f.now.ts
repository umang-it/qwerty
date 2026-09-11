import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['e7f324f3fcf042de9bd510a772092a4f'],
    name: 'miracle',
    script: Now.include('./sys_script_include_e7f324f3fcf042de9bd510a772092a4f.server.js'),
    description: 'Reusable server-side logic for the popular application.',
    apiName: 'x_popular.miracle',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
