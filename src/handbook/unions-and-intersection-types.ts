console.group('Unions and Intersection Types');

console.group('Union Types');
{
  {
    function padLeft(value: string, padding: any) {
      if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
      }
      if (typeof padding === 'string') {
        return padding + value;
      }

      throw new Error(`Expected string or number, got '${typeof padding}'.`);
    }

    console.log(padLeft('Hello world', 4));

    // passes at compile time, fails at runtime.
    // let indentedString = padLeft('Hello World', true);
  }

  {
    function padLeft(value: string, padding: string | number) {
      if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
      }
      if (typeof padding === 'string') {
        return padding + value;
      }

      throw new Error(`Expected string or number, got '${typeof padding}'.`);
    }

    // let indentedString = padLeft('Hello World', true); // Error
  }
}
console.groupEnd();

console.group('Unions with Common Fields');
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;
{
  function getSmallPet(): Fish | Bird {
    let bird = {
      fly() {},
      layEggs() {},
    };
    let fish = {
      swim() {},
      layEggs() {},
    };

    return Math.floor(Math.random() * 2) ? bird : fish;
  }

  let pet = getSmallPet();
  pet.layEggs();

  // Only available in one of the two possible types
  // pet.swim(); // Error
}
console.groupEnd();

console.group('Discriminating Unions');
{
  type NetworkLoadingState = {
    state: 'loading';
  };

  type NetworkFailedState = {
    state: 'failed';
    code: number;
  };

  type NetworkSuccessState = {
    state: 'success';
    response: {
      title: string;
      duration: number;
      summary: string;
    };
  };

  // Create a type which represents only one of the above types but you aren't sure which it is yet.
  type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

  function logger(state: NetworkState): string {
    // Right now TypeScript does not know which of the three potential types state could be.

    // Trying to access a property which isn't shared across all types will raise an error
    // state.code; // Error

    // By switching on state, TypeScript can narrow the union down in code flow analysis
    switch (state.state) {
      case 'loading':
        return 'Downloading...';
      case 'failed':
        // The type must be NetworkFailedState here, so accessing the `code` field is safe
        return `Error ${state.code} downloading`;
      case 'success':
        return `Download ${state.response.title} - ${state.response.summary}`;
    }
  }
}
console.groupEnd();

console.group('Union Exhaustiveness checking');
{
  type NetworkLoadingState = {
    state: 'loading';
  };

  type NetworkFailedState = {
    state: 'failed';
    code: number;
  };

  type NetworkSuccessState = {
    state: 'success';
    response: {
      title: string;
      duration: number;
      summary: string;
    };
  };

  type NetworkFromCachedState = {
    state: 'from_cache';
    id: string;
    response: NetworkSuccessState['response'];
  };

  type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState
    | NetworkFromCachedState;

  // we need to update logger as well:

  function assertNever(x: never): never {
    throw new Error('Unexpected object: ' + x);
  }

  function logger(s: NetworkState): string {
    switch (s.state) {
      case 'loading':
        return 'loading request';
      case 'failed':
        return `failed with code ${s.code}`;
      case 'success':
        return `got response`;
      case 'from_cache':
        return 'blahblah';

      // Here, `assertNever` checks that `s` is of type `never` — the type that's left after all other cases have been removed.
      // If you forget a case, then s will have a real type and you will get a type error.
      // This method requires you to define an extra function, but it's much more obvious when you forget it because the error message includes the missing type name.
      default:
        return assertNever(s);
    }
  }
}
console.groupEnd();

console.group('Intersection Types');
{
  interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }

  interface ArtworksData {
    artworks: { title: string }[];
  }

  interface ArtistsData {
    artists: { name: string }[];
  }

  // These interfaces are composed to have consistent error handling, and their own data.

  type ArtworksResponse = ArtworksData & ErrorHandling;
  type ArtistsResponse = ArtistsData & ErrorHandling;

  const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
      console.error(response.error.message);
      return;
    }

    console.log(response.artists);
  };
}
console.groupEnd();

console.groupEnd();
