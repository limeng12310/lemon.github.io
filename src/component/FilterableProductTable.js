/**
 * Created by limengsi3299 on 2017/1/13.
 */
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component{
    /*getInitialState () {
     return {
     filterText: '',
     inStockOnly: false
     };
     }*/
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false
        }
    }
    handleUserInput (filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }
    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput.bind(this)}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

export default FilterableProductTable;