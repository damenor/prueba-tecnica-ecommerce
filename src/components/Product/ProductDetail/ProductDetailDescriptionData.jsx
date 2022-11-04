import { BsCpu } from 'react-icons/bs'
import { FaMemory } from 'react-icons/fa'
import { GiBattery100, GiWeight } from 'react-icons/gi'
import { MdOutlineSystemSecurityUpdateWarning, MdOutlineScreenshot } from 'react-icons/md'
import { TbDimensions } from 'react-icons/tb'

import styles from './ProductDetail.module.scss'
import { ProductDetailRowWithIcon } from './ProductDetailRowWithIcon'

export const ProductDetailDescriptionData = ({ cpu, ram, os, displayResolution, dimentions, weight, battery }) => {
  return (
    <div className={styles.productDetailDescriptionData}>
      <ProductDetailRowWithIcon Icon={BsCpu} value={cpu} />
      <ProductDetailRowWithIcon Icon={FaMemory} value={ram} />
      <ProductDetailRowWithIcon Icon={MdOutlineSystemSecurityUpdateWarning} value={os} />
      <ProductDetailRowWithIcon Icon={MdOutlineScreenshot} value={displayResolution} />
      <ProductDetailRowWithIcon Icon={TbDimensions} value={dimentions} />
      <ProductDetailRowWithIcon Icon={GiWeight} value={weight} />
      <ProductDetailRowWithIcon Icon={GiBattery100} value={battery} />
    </div>
  )
}
