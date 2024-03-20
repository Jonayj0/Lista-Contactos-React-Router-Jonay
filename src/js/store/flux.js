const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [

			], 
			// Characters: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// getCharacters: function () {
			// 	fetch('https://playground.4geeks.com/apis/fake/contact/agenda')
			// 	.then((response)=>response.json())
			// 	.then((data)=>setStore({Characters: data.results}))
			// 	.catch((error)=>console.log(error))
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
