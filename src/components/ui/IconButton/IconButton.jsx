import styles from './IconButton.module.scss'

export const IconButton = ({ className, Icon, size = 28, ...props }) => {
  return (
    <button className={[styles.iconButton, className].join(' ')} {...props}>
      <Icon color="var(--color-bg-contrast)" size={size} />
    </button>
  )
}
