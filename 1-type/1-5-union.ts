{
    /**
     * Untion Types: OR
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('left');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // function: login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;
    function login2(): LoginState {
        return {
            response: {
                body: 'logged in!!'
            },
        };
    }

    // printLoginState(state: LoginState)
    // success -> body
    // fail -> reason

    function printLoginState2(state: LoginState) {
        if ('response' in state) {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }

}