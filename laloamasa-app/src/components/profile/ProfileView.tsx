import { Edit } from "@mui/icons-material"

export default function ProfileView(){
  return(
    <div className="flex items-center justify-center flex-col max-w-96 gap-y-4 mx-auto text-lg">
      <div className="flex items-center justify-between gap-x-4 w-96">
        <p>Nombre:</p>
        <p className="text-ellipsis overflow-hidden max-w-40">Matías Wasyluk</p>
        <button>
          <Edit />
        </button>
      </div>
      <div className="flex items-center justify-between gap-x-4 w-96">
        <p>Direccion:</p>
        <p className="text-ellipsis overflow-hidden max-w-40">Calle 855 1186</p>
        <button>
          <Edit />
        </button>
      </div>
      <div className="flex items-center justify-between gap-x-4 w-96">
        <p>Telefono:</p>
        <p className="text-ellipsis overflow-hidden max-w-40">1135628327</p>
        <button>
          <Edit />
        </button>
      </div>
      <div className="flex items-center justify-between gap-x-4 w-96 ">
        <p>Correo:</p>
        <p className="text-ellipsis overflow-hidden max-w-40">matiasezequielwasyluk@gmail.com</p>
        <button>
          <Edit />
        </button>
      </div>
      <div className="flex items-center justify-between mr-auto gap-x-4 w-52">
        <p>Soy celíaco/a</p>
        <div>
          <input type="checkbox" name="celiaco" id="celiaco" />
        </div>
      </div>
      <div className="flex items-center justify-between mr-auto gap-x-4 w-52">
        <p>Soy hipertenso/a</p>
        <div>
          <input type="checkbox" name="celiaco" id="celiaco" />
        </div>
      </div>
      <div className="flex items-center justify-between mr-auto gap-x-4 w-52">
        <p>Soy vegano/a</p>
        <div>
          <input type="checkbox" name="celiaco" id="celiaco" />
        </div>
      </div>
      <div className="flex items-center justify-between mr-auto gap-x-4 w-52">
        <p>Soy alergico/a</p>
        <div>
          <input type="checkbox" name="celiaco" id="celiaco" />
        </div>
      </div>
      <div className="flex items-center justify-between mr-auto gap-x-4 w-72 flex-col">
        <p className="text-start w-full mb-3">Alergias:</p>
        <div>
          <textarea className='w-full border' disabled name="" id="" cols={42} rows={4}></textarea>
        </div>
      </div>
    </div>
  )
}