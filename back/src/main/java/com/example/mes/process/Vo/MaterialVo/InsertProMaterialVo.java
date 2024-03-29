package com.example.mes.process.Vo.MaterialVo;

public class InsertProMaterialVo {

    String product_id;
    String material_id;
    int count;

    public InsertProMaterialVo() {
    }

    public InsertProMaterialVo(String product_id, String material_id, int count) {
        this.product_id = product_id;
        this.material_id = material_id;
        this.count = count;
    }

    public String getProduct_id() {
        return product_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }

    public String getMaterial_id() {
        return material_id;
    }

    public void setMaterial_id(String material_id) {
        this.material_id = material_id;
    }

    public double getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "InsertProMaterialVo{" +
                "product_id='" + product_id + '\'' +
                ", material_id='" + material_id + '\'' +
                ", count=" + count +
                '}';
    }
}
