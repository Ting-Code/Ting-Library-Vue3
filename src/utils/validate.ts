/**
 * 判断是否为外部资源
 * @param {*} path
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 *  TS 验证key为object
 *  @param key 键
 *  @param object 对象
 */
export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object
}
