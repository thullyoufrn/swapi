import loadingImg from '../assets/loading.svg'

export default function Loading() {
  return (
    <div className="flex h-60 items-center justify-center animate-spin">
      <img src={loadingImg} alt="Loading..." className='w-10' />
    </div>
  )
}
