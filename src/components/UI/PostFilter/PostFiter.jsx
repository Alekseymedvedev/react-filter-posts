import React from 'react';
import Input from "../Input/Input";
import Select from "../Select/Select";

const PostFiter = ({filter, setfilter}) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={e=>{setfilter({...filter, query: e.target.value})}}
                placeholder={"Поиск..."}
            />
            <Select
                value={filter.sort}
                selectChange={selectedSort=>setfilter({...filter,sort:selectedSort})}
                options={[
                    {value: "title", name: "По названию",},
                    {value: "body", name: "По описанию",}
                ]}

                defaultValue="Сортировать по:"
            />
        </div>
    );
};

export default PostFiter;