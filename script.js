// Miguel bro esto sirve para guardar todas las recetas originales de la página clasificadas por categoría
const R={desayunos:[{name:'Hotcakes esponjosos',ingredients:['2 tazas de harina','2 huevos','1½ tazas de leche','2 cdas de azúcar','1 cda de polvo para hornear','Mantequilla'],steps:['Mezcla los ingredientes secos','Agrega huevos y leche batiendo suavemente','Calienta un sartén con mantequilla','Vierte la mezcla y cocina 2 min por lado'],youtube:'https://www.youtube.com/results?search_query=como+hacer+hotcakes+esponjosos'},{name:'Huevos revueltos',ingredients:['3 huevos','2 cdas de leche','Sal y pimienta','Mantequilla'],steps:['Bate los huevos con leche, sal y pimienta','Calienta mantequilla en un sartén','Vierte los huevos y revuelve constantemente','Cocina hasta que estén cremosos'],youtube:'https://www.youtube.com/results?search_query=huevos+revueltos'},{name:'Avena con fruta',ingredients:['1 taza de avena','2 tazas de leche','Miel al gusto','Fruta fresca picada','Canela'],steps:['Calienta la leche','Agrega la avena y cocina 5 minutos','Añade miel y canela','Sirve con fruta fresca encima'],youtube:'https://www.youtube.com/results?search_query=avena+con+fruta'},{name:'Tostadas francesas',ingredients:['4 rebanadas de pan','2 huevos','½ taza de leche','1 cdita de canela','Azúcar glass','Mantequilla'],steps:['Bate huevos, leche y canela','Remoja el pan en la mezcla','Fríe en mantequilla hasta dorar','Espolvorea con azúcar glass'],youtube:'https://www.youtube.com/results?search_query=tostadas+francesas'},{name:'Yogurt con granola',ingredients:['1 taza de yogurt natural','½ taza de granola','½ taza de fresas','Miel','Arándanos'],steps:['Coloca yogurt en un bowl','Agrega granola encima','Decora con fresas y arándanos','Añade miel al gusto'],youtube:'https://www.youtube.com/results?search_query=yogurt+con+granola'},{name:'Omelette de queso',ingredients:['3 huevos','½ taza de queso rallado','Sal y pimienta','Mantequilla','Jamón (opcional)'],steps:['Bate los huevos con sal y pimienta','Vierte en un sartén caliente con mantequilla','Agrega queso cuando empiece a cuajar','Dobla por la mitad y sirve'],youtube:'https://www.youtube.com/results?search_query=omelette+de+queso'}],comidas:[{name:'Espagueti a la boloñesa',ingredients:['400g de espagueti','500g de carne molida','1 lata de tomate triturado','1 cebolla','2 dientes de ajo','Aceite de oliva','Sal y pimienta'],steps:['Cocina la pasta según instrucciones','Sofríe cebolla y ajo','Agrega la carne y dora','Añade tomate y cocina 15 min','Mezcla con la pasta'],youtube:'https://www.youtube.com/results?search_query=espagueti+boloñesa'},{name:'Pollo asado al horno',ingredients:['4 piezas de pollo','3 cdas de aceite','1 limón','Ajo en polvo','Sal y pimienta','Papas'],steps:['Marina el pollo con aceite, limón y especias','Coloca en charola con papas','Hornea a 200°C por 45 minutos','Sirve caliente'],youtube:'https://www.youtube.com/results?search_query=pollo+asado+al+horno'},{name:'Tacos de carne',ingredients:['500g de carne de res','Tortillas','1 cebolla','Cilantro','Limón','Salsa','Sal'],steps:['Corta y sazona la carne','Cocina a fuego alto','Calienta las tortillas','Arma los tacos con cebolla y cilantro','Sirve con limón y salsa'],youtube:'https://www.youtube.com/results?search_query=tacos+de+carne+asada'},{name:'Pizza de pepperoni',ingredients:['Masa para pizza','Salsa de tomate','Queso mozzarella','Pepperoni','Orégano'],steps:['Extiende la masa','Unta salsa de tomate','Cubre con queso','Coloca el pepperoni','Hornea a 220°C por 15 min'],youtube:'https://www.youtube.com/results?search_query=pizza+de+pepperoni+casera'},{name:'Ensalada César',ingredients:['Lechuga romana','Pollo a la plancha','Pan tostado en cubos','Queso parmesano','Aderezo César'],steps:['Lava y corta la lechuga','Cocina y rebana el pollo','Tuesta cubos de pan','Mezcla todo','Agrega aderezo y queso'],youtube:'https://www.youtube.com/results?search_query=ensalada+cesar'},{name:'Arroz con pollo',ingredients:['2 tazas de arroz','4 piezas de pollo','Caldo de pollo','Verduras mixtas','Azafrán','Sal'],steps:['Dora el pollo','Sofríe el arroz','Agrega caldo y azafrán','Añade verduras','Cocina 20 min tapado'],youtube:'https://www.youtube.com/results?search_query=arroz+con+pollo'}],postres:[{name:'Pastel de chocolate',ingredients:['2 tazas de harina','1¾ tazas de azúcar','¾ taza de cocoa','2 huevos','1 taza de leche','½ taza de aceite','1 cdita de vainilla'],steps:['Mezcla ingredientes secos','Bate huevos, leche, aceite y vainilla','Combina ambas mezclas','Vierte en molde engrasado','Hornea a 180°C por 30-35 min'],youtube:'https://www.youtube.com/results?search_query=pastel+de+chocolate+facil'},{name:'Flan de vainilla',ingredients:['1 lata de leche condensada','1 lata de leche evaporada','5 huevos','1 taza de vainilla','1 taza de azúcar para caramelo'],steps:['Haz el caramelo con azúcar','Licúa todos los ingredientes','Vierte sobre el caramelo','Baño maría 1 hora a 180°C','Refrigera 4 horas'],youtube:'https://www.youtube.com/results?search_query=flan+de+vainilla'},{name:'Brownies',ingredients:['200g de chocolate','150g de mantequilla','3 huevos','1 taza de azúcar','¾ taza de harina','Nueces (opcional)'],steps:['Derrite chocolate con mantequilla','Bate huevos con azúcar','Mezcla todo y agrega harina','Vierte en molde','Hornea 25 min a 180°C'],youtube:'https://www.youtube.com/results?search_query=brownies+caseros'},{name:'Gelatina de fresa',ingredients:['2 sobres de gelatina de fresa','4 tazas de agua','Crema batida','Fresas frescas'],steps:['Hierve 2 tazas de agua','Disuelve la gelatina','Añade agua fría','Refrigera 4 horas','Decora con crema y fresas'],youtube:'https://www.youtube.com/results?search_query=gelatina+de+fresa'},{name:'Galletas de avena',ingredients:['2 tazas de avena','1 taza de harina','¾ taza de azúcar','1 huevo','½ taza de mantequilla','Chispas de chocolate'],steps:['Mezcla ingredientes secos','Agrega mantequilla derretida y huevo','Forma bolitas','Coloca en charola','Hornea 12 min a 180°C'],youtube:'https://www.youtube.com/results?search_query=galletas+de+avena'},{name:'Arroz con leche',ingredients:['1 taza de arroz','4 tazas de leche','1 taza de azúcar','1 raja de canela','1 cdita de vainilla'],steps:['Cocina el arroz con agua','Agrega leche y canela','Añade azúcar','Cocina a fuego bajo 30 min','Agrega vainilla y refrigera'],youtube:'https://www.youtube.com/results?search_query=arroz+con+leche'}],bebidas:[{name:'Limonada',ingredients:['6 limones','1 litro de agua','¾ taza de azúcar','Hielo','Menta (opcional)'],steps:['Exprime los limones','Mezcla con agua y azúcar','Revuelve hasta disolver','Sirve con hielo','Decora con menta'],youtube:'https://www.youtube.com/results?search_query=limonada+casera'},{name:'Smoothie de fresa',ingredients:['2 tazas de fresas','1 plátano','1 taza de yogurt','½ taza de leche','Miel al gusto'],steps:['Lava las fresas','Coloca todo en la licuadora','Licúa hasta suave','Prueba dulzor','Sirve frío'],youtube:'https://www.youtube.com/results?search_query=smoothie+de+fresa'},{name:'Chocolate caliente',ingredients:['3 tazas de leche','3 cdas de cocoa','3 cdas de azúcar','½ cdita de vainilla','Malvaviscos'],steps:['Calienta la leche','Mezcla cocoa y azúcar','Bate hasta disolver','Agrega vainilla','Sirve con malvaviscos'],youtube:'https://www.youtube.com/results?search_query=chocolate+caliente'},{name:'Té helado',ingredients:['4 bolsas de té','1 litro de agua','Azúcar al gusto','Limón','Hielo'],steps:['Hierve el agua','Prepara té concentrado','Endulza al gusto','Deja enfriar','Serve con hielo y limón'],youtube:'https://www.youtube.com/results?search_query=te+helado'},{name:'Agua de jamaica',ingredients:['1 taza de flores de jamaica','2 litros de agua','1 taza de azúcar','Hielo','Limón'],steps:['Hierve agua con jamaica 10 min','Cuela y endulza','Deja enfriar','Refrigera','Sirve con hielo'],youtube:'https://www.youtube.com/results?search_query=agua+de+jamaica'},{name:'Café frappé',ingredients:['1 taza de café frío','½ taza de leche','2 cdas de azúcar','Hielo','Crema batida'],steps:['Licúa café, leche, azúcar e hielo','Sirve en vaso alto','Decora con crema batida','Añade jarabe (opcional)','Disfruta frío'],youtube:'https://www.youtube.com/results?search_query=cafe+frappe'}]};
        
        let F=[],CS='',CR=null, U=[]; // F: Favoritos, CS: Categoría Actual, CR: Receta Actual, U: User Recipes
        
        // Miguel bro esto sirve para manejar la simulación de la base de datos de recetas creadas por el usuario usando el almacenamiento local del navegador
        function loadUserRecipes(){U=JSON.parse(localStorage.getItem('userRecipes')||'[]');}
        function saveUserRecipes(){localStorage.setItem('userRecipes',JSON.stringify(U));}
        function generateId(){return Date.now().toString(36);}

        function showCRUD(){
            loadUserRecipes();
            document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));
            crud.classList.remove('hidden');
            renderCRUDList();
            resetForm();
        }

        function renderCRUDList(){
            // Miguel bro esto sirve para generar la lista visual de recetas creadas en la sección de administración, incluyendo los botones de Editar y Eliminar
            crudList.innerHTML=U.map((r,i)=>
                `<div class="crud-list-item animated">
                    <h4>${r.name}</h4>
                    <div class="crud-actions">
                        <button class="btn edit-btn" onclick="editRecipe('${r.id}')">Editar</button>
                        <button class="btn delete-btn" onclick="deleteRecipe('${r.id}')">Eliminar</button>
                    </div>
                </div>`
            ).join('');
        }

        function resetForm(){
            crudForm.reset();
            recipeId.value='';
            crudFormTitle.textContent='CREAR NUEVA RECETA';
            crudSubmitBtn.textContent='CREAR RECETA';
        }

        crudForm.onsubmit=function(e){
            e.preventDefault();
            const name=recipeName.value.trim();
            const ingredients=recipeIngredients.value.split(',').map(i=>i.trim()).filter(i=>i.length>0);
            const steps=recipeSteps.value.split(';').map(s=>s.trim()).filter(s=>s.length>0);
            const id=recipeId.value;

            const newRecipe={name,ingredients,steps,youtube:'https://www.youtube.com/results?search_query='+encodeURIComponent(name),id:id||generateId()};

            if(id){
                const index=U.findIndex(r=>r.id===id);
                if(index!==-1) U[index]=newRecipe;
                alert('Receta actualizada!');
            }else{
                U.push(newRecipe);
                alert('Receta creada!');
            }
            saveUserRecipes();
            renderCRUDList();
            resetForm();
        };

        function editRecipe(id){
            const recipe=U.find(r=>r.id===id);
            if(!recipe) return;
            
            recipeId.value=recipe.id;
            recipeName.value=recipe.name;
            recipeIngredients.value=recipe.ingredients.join(', ');
            recipeSteps.value=recipe.steps.join('; ');

            crudFormTitle.textContent=`EDITAR RECETA: ${recipe.name}`;
            crudSubmitBtn.textContent='GUARDAR CAMBIOS';
            document.getElementById('crud').scrollTop=0; 
        }

        function deleteRecipe(id){
            if(!confirm('¿Estás seguro de que quieres eliminar esta receta?')) return;
            U=U.filter(r=>r.id!==id);
            saveUserRecipes();
            renderCRUDList();
            alert('Receta eliminada.');
        }
        
        // Miguel bro esto sirve para manejar el desplazamiento automático del slider de Recetas Destacadas
        function autoScrollSlider() {
            const slider = document.getElementById('slider');
            if (!slider) return;

            // Velocidad de desplazamiento (ej: cada 3 segundos)
            const scrollInterval = 3000;
            // Cantidad de desplazamiento (ej: 300px o el ancho de una tarjeta + margen)
            const scrollDistance = 300; 

            setInterval(() => {
                // Si llegamos al final del slider, volvemos al principio
                if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Desplazamos la distancia definida
                    slider.scrollBy({ left: scrollDistance, behavior: 'smooth' });
                }
            }, scrollInterval);
        }
        
        // Miguel bro esto sirve para inicializar la página cargando las recetas de usuario, llenando el carrusel de destacadas Y activando el auto-scroll
        function init(){
            loadUserRecipes();
            Object.values(R).flat().slice(0,8).forEach((r,i)=>{
                slider.innerHTML+=`<div class="slider-card" onclick="showRecipe('${Object.keys(R).find(k=>R[k].includes(r))}',${R[Object.keys(R).find(k=>R[k].includes(r))].indexOf(r)})" style="animation-delay:${i*.1}s"><h3>${r.name}</h3><p>${r.ingredients.length} ingredientes</p></div>`
            });
            updateFavCount();
            autoScrollSlider(); // ¡Activamos el auto-scroll aquí!
        }
        
        // Miguel bro esto sirve para mostrar la lista de recetas cuando seleccionas una categoría
        function showSection(s){
            CS=s;
            home.classList.add('hidden');
            section.classList.remove('hidden');
            sectionTitle.textContent=s.toUpperCase();

            // Determina qué conjunto de recetas mostrar (recetas base o favoritas)
            const recipes = R[s] || F; 
            const items = s === 'favoritos' ? F : recipes;

            // Limpia y rellena la cuadrícula de recetas
            recipesGrid.innerHTML=''; 
            
            items.forEach((r,i)=>{
                const isFav=F.some(f=>f.name===r.name);
                // Determina la sección y el índice correctos. Si es una receta base, usa 's'. Si es un favorito, usa 'favoritos'.
                const sectionKey = Object.keys(R).includes(s) ? s : 'favoritos';
                const recipeIndex = sectionKey === 'favoritos' ? F.indexOf(r) : R[s].indexOf(r);

                recipesGrid.innerHTML+=`<div class="recipe-card animated" style="animation-delay:${i*.1}s">
                    <div class="recipe-header">
                        <h3>${r.name}</h3>
                        <span class="heart ${isFav?'active':''}" onclick="event.stopPropagation();toggleFav('${sectionKey}',${recipeIndex})">♥</span>
                    </div>
                    <p style="color:#A0A0A0;font-weight:500">${r.ingredients.length} ingredientes</p>
                </div>`;
            });
            // Asigna el evento onclick a las nuevas tarjetas
            document.querySelectorAll('.recipes-grid .recipe-card').forEach((c,i)=>c.onclick=()=>showRecipe(s,i))
        }
        
        // Miguel bro esto sirve para mostrar el detalle completo de una receta, incluyendo ingredientes y pasos
        function showRecipe(s,i){
            // Obtener la receta correcta, ya sea de las bases (R), favoritos (F) o usuario (U)
            let r;
            if (s === 'favoritos') {
                r = F[i];
            } else if (s === 'user') {
                r = U[i];
            } else {
                r = R[s][i];
            }
            
            CR={section:s,index:i,recipe:r};
            document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));
            detail.classList.remove('hidden');
            const isFav=F.some(f=>f.name===r.name);
            recipeDetail.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:start"><h1>${r.name}</h1><span class="heart ${isFav?'active':''}" onclick="toggleFav('${s}',${i})" style="font-size:2rem">♥</span></div><h2>INGREDIENTES</h2><ul class="ingredient-list">${r.ingredients.map((ing,i)=>`<li style="animation-delay:${i*.1}s">• ${ing}</li>`).join('')}</ul><h2>PREPARACIÓN</h2><div>${r.steps.map((st,i)=>`<div class="step animated" style="animation-delay:${i*.15}s"><div class="step-number">${i+1}</div><p>${st}</p></div>`).join('')}</div><a href="${r.youtube}" target="_blank" rel="noopener noreferrer"><button class="btn btn-youtube">VER BÚSQUEDA EN YOUTUBE</button></a>`}
        
        // Miguel bro esto sirve para añadir o quitar una receta de la lista de favoritos y actualizar el contador
        function toggleFav(s,i){
            let r;
            if (s === 'favoritos') {
                r = F[i];
            } else if (s === 'user') {
                r = U[i];
            } else {
                r = R[s][i];
            }

            const idx=F.findIndex(f=>f.name===r.name);
            idx>=0?F.splice(idx,1):F.push({...r,section:s});
            updateFavCount();
            // Refrescar la vista actual si es necesario
            if(CR){
                showRecipe(CR.section, CR.index);
            } else if(CS) {
                showSection(CS);
            }
        }
        
        function updateFavCount(){favCount.textContent=`${F.length} recetas`}
        function showHome(){document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));home.classList.remove('hidden');CS=''}
        
        // Miguel bro esto sirve para volver a la vista anterior, ya sea la lista de recetas o la página de administración CRUD
        function backToSection(){
            detail.classList.add('hidden');
            if(CR.section==='user'){
                showCRUD(); // Vuelve a la administración si venía de ahí
            } else {
                section.classList.remove('hidden'); // Vuelve a la vista de lista de recetas base o favoritos
                showSection(CR.section); // Refresca la lista
            }
            CR=null;
        }
        init();