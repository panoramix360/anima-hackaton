/**
 * Config the config tool
 * @module @backend/src/boostrap
 * @author Fausto Junqueira <fausto.junqueira@radixeng.com.br>
 */

import 'js-yaml';

/**
 * @public
 * Bootstraping the config tool
 *
 * @export
 * @param {string} [path="./config/"] path of the config folder
 */
export default function configBootstrap(path = "./config/") {
  if("env" in process) {
    process.env.NODE_CONFIG_DIR = path;
  }
}
