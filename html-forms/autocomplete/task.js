class Autocomplete {
  constructor( container ) {
    this.container = container;
    this.input = container.querySelector( '.autocomplete__input' );
    this.searchInput = container.querySelector( '.autocomplete__search' );
    this.list = container.querySelector( '.autocomplete__list' );
    this.valueContainer = container.querySelector( '.autocomplete__value' );
    this.valueElement = container.querySelector( '.autocomplete__text-content' );

    this.registerEvents();
  }

  registerEvents() {
    this.valueContainer.addEventListener( 'click', e => {
      this.searchInput.classList.add( 'autocomplete__search_active' );
      this.list.classList.add( 'autocomplete__list_active' );
      this.searchInput.value = this.valueElement.textContent.trim();
      this.searchInput.focus();

      this.onSearch();
    });


    this.searchInput.addEventListener( 'input', e => this.onSearch());

    this.list.addEventListener( 'click', e => {
      const { target } = e;
      if ( !target.matches( '.autocomplete__item' )) {
        return;
      }

      const { textContent: text } = target,
        { id: value, index } = target.dataset;

      this.onSelect({
        index,
        text,
        value
      });
    });
  }

  onSelect( item ) {
    this.input.selectedIndex = item.index;
    this.valueElement.textContent = item.text;

    this.searchInput.classList.remove( 'autocomplete__search_active' );
    this.list.classList.remove( 'autocomplete__list_active' );
  }

  onSearch() {
    const matches = this.getMatches( this.searchInput.value );

    this.renderMatches( matches );
  }

  renderMatches( matches ) {
    const html = matches.map( item => `
    	<li>
        <span class="autocomplete__item"
        	data-index="${item.index}"
          data-id="${item.value}"
        >${item.text}</span>
      </li>
    `);

    this.list.innerHTML = html.join('');
  }

  getMatches( text ) {
    /*
      TODO: этот метод нужно дописать
      text - фраза, которую вводят в поле поиска
      Метод должен вернуть массив.

      Он формируется на основе списка опций select-элемента (this.input)
      Подходящие опции - те, чей текст содержит то, что есть в аргументе text
      Необходимо вернуть массив объектов со свойствами:
      {
        text: 'Содержимое <option>',
        value: 'Содержимое атрибута value'
      }
    */
	//alert('Hi');
	//console.log(this.input.options);
	
	let arr = [];
	const options = [...document.querySelectorAll('option')];
	//console.log(options);
	//const us = options[1];
	//console.log({text: us.text, value: us.value});
	//console.log(arr);
	options.forEach(element => arr.push({text: element.text, value: element.value}));
	const inp = document.querySelector('input')
	//console.log(inp.value);
	let select = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].text.includes(inp.value || inp.value != null)) {	
			select.push({text: arr[i].text, value: arr[i].value})
		};
	}
	return select;
	
   // return [
    //  {
    //    text: 'Чубакка',
      //  value: '1'
    //  }
   // ];
  }
}

new Autocomplete( document.querySelector( '.autocomplete' ));
