import { parse } from "path";
export function MyPlugins(params) {
  return {
    name: "my-plugins",
    transform(code, id) {
      if (parse(id).ext.includes(".i18n")) {
        return {
          code: code.replace(
            /export default[\s\S]*;/,
            `export default function(Component) {
              Component.__i18n = Component.__i18n || [];
              Component.__date = new Date().toISOString();
              Component.__i18n.push(JSON.stringify({en}));
            }`
          ),
          map: null,
        };
      }

      return { code, map: null };
    },
  };
}
// export const en = ${JSON.stringify(JSON.parse(code).en)}
// export default function(Component) {
//   Component.__i18n = Component.__i18n || [];
//   Component.__i18n.push(JSON.stringify({en}));
// }
