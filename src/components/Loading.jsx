export function Loading() {
    return <p className='font-bold text-white mt-[40px] text-[1.4rem]'><i>Loading<span id="dots">...</span></i></p>;
  }

export async function waitForInfo(promise) {
await new Promise(resolve => {
    setTimeout(resolve, 4000);
});
return promise;
}
