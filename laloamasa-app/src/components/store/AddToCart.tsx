import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { manrope } from '@/app/fonts';
import Button from '../buttons/Button';

export default function AddToCart(){
  return(
    <div className="flex items-center justify-center gap-x-4">
      <div className="flex items-center justify-center gap-x-2">
        <button className="p-2 rounded border w-10 h-10 flex items-center justify-center">
          <RemoveIcon />
        </button>
        <p className={`${manrope.className} font-bold text-lg p-2 rounded border w-10 h-10 flex items-center justify-center`}>
          0
        </p>
        <button className="p-2 rounded border w-10 h-10 flex items-center justify-center">
          <AddIcon />
        </button>
      </div>
      <div>
        <Button text='Añadir al carrito'/>
      </div>
    </div>
  )
}