import { UseAuthCtx } from "~/context/auth.context";

export default function Header(props) {

  const { auth } = UseAuthCtx();

  return (
    <div class="flex flex-col justify-between items-center mb-8 w-full">
      <div class="flex flex-row justify-between items-center mb-8 w-full">
        <div class="">
          <h1 class="text-xl font-bold">Fakultas Teknik Elektro</h1>
        </div>
        <div class="flex items-center">
          <span class="mr-2 font-bold">
            <div class="flex flex-row justify-center items-center">
              <div class="">
                {auth() && auth().username}
              </div>
              <div class="font-light text-gray-400 text-xs">, {auth() && auth().role}
              </div>
            </div>
          </span>
          <img
            src={"/profile.png"}
            alt="User Avatar"
            class="w-10 h-10 rounded-full"
          />
        </div>
      </div>
      <div class="items-center justify-center mb-8">
        <h1 class="text-xl font-bold text-center">{props.title}</h1>
      </div>
    </div>
  );
}
