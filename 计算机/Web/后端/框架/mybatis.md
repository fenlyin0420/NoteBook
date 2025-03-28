mybatis与数据库交互时，java 对象属性名与数据库列名映射规则：
1. 属性名与列名一致，直接映射
2. 通过xml中的`<resultMap>` 指定映射

```xml
<resultMap id="EmployeeResultMap" type="com.example.entity.Employee">
    <id property="id" column="emp_id"/>
    <result property="name" column="emp_name"/>
    <result property="age" column="emp_age"/>
</resultMap>
```
1. 通过`@Result`注解指定映射

```java
import org.apache.ibatis.annotations.*;

@Mapper
public interface EmployeeMapper {
    @Results({
        @Result(property = "id", column = "emp_id"),
        @Result(property = "name", column = "emp_name"),
        @Result(property = "age", column = "emp_age")
    })
    @Select("SELECT emp_id, emp_name, emp_age FROM employee WHERE emp_id = #{id}")
    Employee getEmployeeById(int id);
}
```
1. 通过`AS`关键字指定与java对象属性同名的alias