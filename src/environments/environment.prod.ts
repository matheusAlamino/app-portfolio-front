// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const url = 'localhost:4200'
const protocolo = 'https://'

export const environment = {
  production: false,
  api: {
    local: `${protocolo}${url}/`,
    vimeo_rest: `${protocolo}api-portofolio-back.vercel.app/`,
    // mail_manager: `${protocolo}localhost:3333/`
    mail_manager: `${protocolo}api-email-manager.vercel.app/`
  }
};
