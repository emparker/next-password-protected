import Head from 'next/head'


export default function Home({ hasReadPermission }) {
  return (
    <div>
      <Head>
        <title>Create Next App by Tetonic</title>
      </Head>

      <main className="bg-yellow-300 text-2xl border-2 border-black p-11 m-40">
        <h2>Site content goes here. Please log in by following link below.</h2>

        {!hasReadPermission ? (
          <div>
            <button
              className="mt-3 bg-black text-yellow-300 p-2 font-bold rounded hover:bg-gray-600"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/login';
              }}
            >
              Login
            </button>
          </div>
        ) : (
          <button
            className="mt-3 bg-black text-yellow-300 p-2 font-bold rounded hover:bg-gray-600"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/login';
            }}
          >
            Logout
          </button>
        )}
        <div>
          <button
            className="mt-3 bg-black text-yellow-300 p-2 font-bold rounded hover:bg-gray-600"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/protected';
            }}
          >
            Protected page 😉
          </button>
        </div>
      </main>
    </div>
  );
}
