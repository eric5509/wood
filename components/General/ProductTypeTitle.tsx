
type Props = {
    title: string 
}

export default function ProductTypeTitle({title}: Props) {
  return (
    <p className='text-2xl font-bold mb-3'>{title}</p>
  )
}


