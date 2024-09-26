import { FormEvent, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLogin, useLogout } from '../../authentication/useLogin'
import { RootState } from '../../state/store'
import { closeModal } from '../../state/modalSlice'
import { BsCopy } from 'react-icons/bs'
import { toast } from 'react-toastify'

const notifyLog = (status: string) => {
  toast.success(`${status}  Successfully`),
    {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
}

function LoginModal() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { log, isLoading, error, user } = useLogin()
  const logout = useLogout()
  const isOpen = useSelector((state: RootState) => state.modalReducer.isOpen)
  const dispatch = useDispatch()
  const userData = user?.data
  const modalRef = useRef<HTMLDivElement>(null)

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      dispatch(closeModal())
    }
  }
  const logUserOut = (e: FormEvent) => {
    e.preventDefault()
    logout()
    dispatch(closeModal())
    notifyLog('Logout')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await log({ username, password })
      dispatch(closeModal())
      notifyLog('Login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {isOpen && (
        <div
          onClick={handleOutsideClick}
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
        >
          {userData ? (
            <div
              ref={modalRef}
              className="relative flex w-5/6 flex-col items-center gap-y-4 rounded-3xl bg-white p-8 shadow-lg lg:w-1/2"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">
                  Hello {userData.firstName} {userData.lastName},
                </h1>
                <img src={userData.image} alt="" className="w-1/6" />
              </div>
              <h3 className="text-xl font-medium">Email: {userData.email}</h3>
              <h3 className="text-xl font-medium">
                State: {userData.address.state}
              </h3>
              <h3 className="text-xl font-medium">
                City: {userData.address.city}
              </h3>
              <button
                onClick={logUserOut}
                className="rounded-3xl bg-red-500 px-6 py-2 text-xl text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <div
              ref={modalRef}
              className="relative flex w-5/6 flex-col items-center rounded-3xl bg-white p-8 shadow-lg lg:w-1/2"
            >
              {error && (
                <p className="mb-4 rounded-lg bg-red-400 p-2">
                  Invalid Username or Password, kindly try again
                </p>
              )}
              <form
                onSubmit={handleSubmit}
                className="flex w-5/6 flex-col gap-y-4 lg:w-1/2"
              >
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="rounded-3xl border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <div className="flex items-center gap-x-2">
                  <BsCopy
                    className="cursor-pointer hover:opacity-50 hover:transition-opacity"
                    onClick={() => {
                      navigator.clipboard.writeText('emilys')
                    }}
                  />
                  <p>Copy the Username</p>
                </div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="rounded-3xl border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="flex items-center gap-x-2">
                  <BsCopy
                    className="cursor-pointer hover:opacity-50 hover:transition-opacity"
                    onClick={() => {
                      navigator.clipboard.writeText('emilyspass')
                    }}
                  />
                  <p>Copy the Password</p>
                </div>

                <button
                  type="submit"
                  className="w-1/2 rounded-3xl bg-black px-4 py-2 text-white"
                >
                  {isLoading ? 'Loading' : 'Login'}
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default LoginModal
