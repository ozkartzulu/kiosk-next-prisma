
import Image from "next/image"
import useKiosk from "@/hooks/useKiosk"

const Category = ({category}) => {
  const { id, name, icon} = category
  const {handleClickCategory, currentCategory} = useKiosk()
  return (
    <div className={`${currentCategory?.id === id ? 'bg-amber-400': ''} flex items-center gap-3 w-full border p-5 hover:bg-amber-400`}>
      <Image width={60} height={60}
        src={`/assets/img/icono_${icon}.svg`}
        alt="Image icon"
        priority='true'
        // style={{width: 'auto', height: 'auto'}}
      />
      <button type="button" 
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={ () => handleClickCategory(id) }
      >{name}</button>
    </div>
  )
}

export default Category