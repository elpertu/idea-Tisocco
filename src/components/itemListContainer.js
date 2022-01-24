import Item from "./item";
const items = [
	{id: 1, nombre: "Mesa Arco", src:"https://static.wixstatic.com/media/bff52c_eda079378b0e4cd5b677bf6132699049~mv2.jpg/v1/fill/w_1222,h_836,al_c,q_85,usm_0.66_1.00_0.01/bff52c_eda079378b0e4cd5b677bf6132699049~mv2.webp"},
	{id: 2, nombre: "Mesa Campo", src:"https://static.wixstatic.com/media/bff52c_221d544f82224dbc95419d8bf4beae01~mv2.jpg/v1/fill/w_1254,h_836,al_c,q_85,usm_0.66_1.00_0.01/bff52c_221d544f82224dbc95419d8bf4beae01~mv2.webp"},
	{id: 3, nombre: "Sillon Japo", src:"https://static.wixstatic.com/media/bff52c_f1af50a8796b4030812c77ebc243591b~mv2.jpeg/v1/fill/w_836,h_836,al_c,q_85,usm_0.66_1.00_0.01/bff52c_f1af50a8796b4030812c77ebc243591b~mv2.webp"},
	{id: 4, nombre: "Porta Llaves", src:"https://static.wixstatic.com/media/bff52c_8dffe67154ce489d85f21c9e461bc10c~mv2.jpg/v1/fill/w_836,h_836,al_c,q_85,usm_0.66_1.00_0.01/bff52c_8dffe67154ce489d85f21c9e461bc10c~mv2.webp"},
];

const ItemListContainer = () => {
	return(
		<div role="region" aria-label="Code Example" class="ReactPlayground-StyledExample-module--cls2--Z1-mo ReactPlayground-StyledExample-module--cls1--2oYwU bs-example ReactPlayground-StyledExample-module--show-code--rW9o2">
		<div>
		<div className="d-flex justify-content-around ">
			{items.map(item =>(
				<Item item={item}/>
			))}
		</div>
		</div>
		</div>
	)
};

export default ItemListContainer


