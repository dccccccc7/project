package com.example.mes.process.Controller;

import com.alibaba.fastjson.JSON;
import com.example.mes.process.Service.IMaterialService;
import com.example.mes.process.Vo.MaterialVo.DeleteMaterialVo;
import com.example.mes.process.Vo.MaterialVo.InsertMaterialVo;
import com.example.mes.process.Vo.MaterialVo.QueryMaterialVo;
import com.example.mes.process.Vo.MaterialVo.UpdateMaterialVo;
import com.example.mes.process.Vo.PageVo.PageVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/process")
public class MaterialController {

    @Autowired
    IMaterialService service;

    //从物料表material中查询全部物料信息，id、name、size、color、comments、status
    @GetMapping("/getMaterials")
    public String getMaterials(int pageOffset,int pageSize){
        try {
            PageVo pageVo = new PageVo(pageOffset,pageSize);
            HashMap<String,Object> data = new HashMap<>();
            int count = service.getCount();
            List<QueryMaterialVo> materials = service.getMaterials(pageVo);
            data.put("count",count);
            data.put("materials",materials);
            return JSON.toJSONString(data);
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("controller:查询物料信息失败");
            return "";
        }
    }

    //跟据物料id查询对应物料的信息
    @GetMapping("/getMaterialByID")
    public String getMaterialByID(String material_id){
        try {
            return JSON.toJSONString(service.getMaterialByID(material_id));
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("controller:根据id查询物料信息失败");
            return "";
        }
    }

    //增加一个物料
    @PostMapping("/addMaterial")
    public String addMaterial(@RequestBody InsertMaterialVo insertMaterialVo){
        try {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            String status = "正常";
            insertMaterialVo.setMaterial_id(service.getIndex()+1+"");
            insertMaterialVo.setCreated_time(timestamp);
            insertMaterialVo.setStatus(status);
            return service.addMaterial(insertMaterialVo);
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("controller:添加物料失败");
            return "添加失败";
        }
    }

    //根据物料id删除一个物料
    @PostMapping("/deleteMaterialByID")
    public String deleteMaterialByID(@RequestBody DeleteMaterialVo deleteMaterialVo){
        try {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            deleteMaterialVo.setModified_time(timestamp);
            return service.deleteMaterialByID(deleteMaterialVo);
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("controller:删除物料失败");
            return "删除失败";
        }
    }

    //修改一个物料，status与comments
    @PostMapping("/updateMaterialByID")
    public String updateMaterialByID(@RequestBody UpdateMaterialVo updateMaterialVo){
        try {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            updateMaterialVo.setModified_time(timestamp);
            return service.updateMaterialByID(updateMaterialVo);
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("controller:更新物料失败");
            return "更新失败";
        }
    }

    @GetMapping("/getMaterialStock")
    public String getMaterialStock(int pageOffset,int pageSize){
        try {
            List<QueryMaterialVo> list = service.getMaterials(new PageVo(pageOffset,pageSize));
            ArrayList<HashMap<String,Object> > materials = new ArrayList<>();
            for(QueryMaterialVo queryMaterialVo:list){
                HashMap<String,Object> hashMap = new HashMap<>();
                hashMap.put("id",queryMaterialVo.getMaterial_id());
                hashMap.put("name",queryMaterialVo.getName());
                hashMap.put("size",queryMaterialVo.getSize());
                hashMap.put("color",queryMaterialVo.getColor());
                hashMap.put("balance",pageOffset);
                materials.add(hashMap);
            }
            HashMap<String,Object> data = new HashMap<>();
            data.put("count",20);
            data.put("materials",materials);
            return JSON.toJSONString(data);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    @GetMapping("/getMaterialStockByInfo")
    public String getMaterialStockByInfo(String name,String size,String color){
        try {
            System.out.println(name+size+color);
            return "0";
        }catch (Exception e){
            e.printStackTrace();
            System.out.println();
            return "0";
        }
    }
}
