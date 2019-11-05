import { lazy } from 'react'

export { default as Heading } from 'Common/heading/Heading'
export { default as Avatar } from 'Common/avatar/Avatar'
export { default as Button } from 'Common/button/Button'
export { default as Image } from 'Common/image/Image'
export { HeartButton } from 'Common/heartButton/HeartButton'

const Product = lazy(() => import('Common/product/Product'))
export { Product }

const Interval = lazy(() => import('Common/Interval'))
export { Interval }

const Counter = lazy(() => import('Common/counter/Counter'))
export { Counter }

const Input = lazy(() => import('Common/input/Input'))
export { Input }

