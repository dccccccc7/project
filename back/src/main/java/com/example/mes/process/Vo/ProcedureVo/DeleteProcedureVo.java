package com.example.mes.process.Vo.ProcedureVo;

import java.sql.Timestamp;

public class DeleteProcedureVo {

    //要删除的工序的id
    String procedure_id;
    //删除人
    String operator_id;
    //删除时间，使用set赋值
    Timestamp modified_time;

    public DeleteProcedureVo() {
    }

    public DeleteProcedureVo(String procedure_id, String operator_id) {
        this.procedure_id = procedure_id;
        this.operator_id = operator_id;
    }

    public String getProcedure_id() {
        return procedure_id;
    }

    public void setProcedure_id(String procedure_id) {
        this.procedure_id = procedure_id;
    }

    public String getOperator_id() {
        return operator_id;
    }

    public void setOperator_id(String operator_id) {
        this.operator_id = operator_id;
    }

    public Timestamp getModified_time() {
        return modified_time;
    }

    public void setModified_time(Timestamp modified_time) {
        this.modified_time = modified_time;
    }

    @Override
    public String toString() {
        return "DeleteProcedureVo{" +
                "procedure_id='" + procedure_id + '\'' +
                ", operator_id='" + operator_id + '\'' +
                ", modified_time=" + modified_time +
                '}';
    }
}
