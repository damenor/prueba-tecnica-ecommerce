export const getClassName = ({ className, optionals = [] }) => {
  let classNameTemp = className
  optionals.forEach(option => option && (classNameTemp += ` ${option}`))
  return classNameTemp
}
