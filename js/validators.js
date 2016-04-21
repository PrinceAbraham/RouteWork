employeeApp.directive('idValidation',['$q','$timeout', function($q, $timeout){
    return {
        
        restrict: 'AE',
        require: 'ngModel',
        link: function(scope, element, attrs, model){
            
            if(attrs.name=="newID"){
            
            model.$asyncValidators.iDAvailable = function (){
    
                var iDAvailable = true;
                
                console.log(attrs.name);
                    
                for(var index=0; index<scope.totalEmployeeData.length; index++){
                    if(scope.totalEmployeeData[index].employeeNumber==element.val()){
                        
                        iDAvailable = false;
                        
                    }
                }
                
            var defer = $q.defer();
            $timeout(function(){
                scope.newEmployee.Id = Number(element.val());
                console.log(scope.newEmployee.Id);
                model.$setValidity('iDAvailable', iDAvailable); 
                defer.resolve;
            }, 1000);
            return defer.promise;
            };
            }else{
                model.$asyncValidators.iDAvailable = function (){
    
                var iDAvailable = true;
                    
                var firstValueIndex = scope.editEmpIndex;
                
                var tempArray = scope.totalEmployeeData;
                    
                console.log(tempArray);
                    
                console.log("firstValue is "+firstValueIndex );
                    
                for(var index=0; index<tempArray.length; index++){
                    if(tempArray[index].employeeNumber==element.val() && element.val() != tempArray[firstValueIndex].employeeNumber){
                        
                        iDAvailable = false;
                        
                    }
                }
                
            var defer = $q.defer();
            $timeout(function(){
                scope.editEmployee.Id = Number(element.val());
                console.log(scope.editEmployee.Id);
                model.$setValidity('iDAvailable', iDAvailable); 
                defer.resolve;
            }, 1000);
            return defer.promise;
            };
                
            }
        }
    }
}]);

employeeApp.directive('salaryValidation',['$q','$timeout', function($q, $timeout){
    return {
        restrict: 'AE',
        require: 'ngModel',
        link: function(scope, element, attrs, model){
            
            if(attrs.name=="newSalary"){
            model.$asyncValidators.salaryValidation = function (){
    
                var rightSalary = false;
                    
                var firstValueIndex = scope.editEmpIndex;
                
                if(scope.selectedDesignation=="Consultant"){
                    if(element.val()>=40000 && element.val()<=60000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Snr. Consultant"){
                    if(element.val()>=60001 && element.val()<=80000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Lead"){
                    if(element.val()>=80001 && element.val()<=100000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Asst. Manager"){
                    if(element.val()>=100001 && element.val()<=120000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Manager"){
                    if(element.val()>=120001 && element.val()<=140000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Snr. Manager"){
                    if(element.val()>=140001 && element.val()<=160000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }
                    
                console.log(scope.totalEmployeeData[firstValueIndex].employeeSalary);
                    
                console.log(rightSalary);
                
            var defer = $q.defer();
            $timeout(function(){
                scope.newEmployee.Salary = Number(element.val());
                model.$setValidity('salaryValidation', rightSalary); 
                defer.resolve;
            }, 1500);
            return defer.promise;
            };
            }else{
                model.$asyncValidators.salaryValidation = function (){
    
                var rightSalary = false;
                    
                var firstValueIndex = scope.editEmpIndex;
                
                if(scope.selectedDesignation=="Consultant"){
                    if(element.val()>=40000 && element.val()<=60000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Snr. Consultant"){
                    if(element.val()>=60001 && element.val()<=80000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Lead"){
                    if(element.val()>=80001 && element.val()<=100000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Asst. Manager"){
                    if(element.val()>=100001 && element.val()<=120000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Manager"){
                    if(element.val()>=120001 && element.val()<=140000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Snr. Manager"){
                    if(element.val()>=140001 && element.val()<=160000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }
                    
                console.log(scope.totalEmployeeData[firstValueIndex].employeeSalary);
                    
                console.log(rightSalary);
                
            var defer = $q.defer();
            $timeout(function(){
                scope.editEmployee.Salary = Number(element.val());
                model.$setValidity('salaryValidation', rightSalary); 
                defer.resolve;
            }, 1500);
            return defer.promise;
            };
            }
        }
    }
}]);

employeeApp.directive('designationValidation',['$q','$timeout', function($q, $timeout){
    return {
        restrict: 'AE',
        require: 'ngModel',
        link: function(scope, element, attrs, model){
            
            if(attrs.name=="newDesignation"){
                model.$asyncValidators.salaryValidation = function (){
    
                var rightSalary = false;
                    
                //var tempDesignation= scope.selectedDesignation;
                    
                var firstValueIndex = scope.editEmpIndex;
                
                if(scope.selectedDesignation=="Consultant"){
                    if(scope.newEmployee.Salary >=40000 && scope.newEmployee.Salary <=60000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Snr. Consultant"){
                    if(scope.newEmployee.Salary>=60001 && scope.newEmployee.Salary<=80000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Lead"){
                    if(scope.newEmployee.Salary>=80001 && scope.newEmployee.Salary<=100000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Asst. Manager"){
                    if(scope.newEmployee.Salary>=100001 && scope.newEmployee.Salary<=120000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Manager"){
                    if(scope.newEmployee.Salary>=120001 && scope.newEmployee.Salary<=140000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Snr. Manager"){
                    if(scope.newEmployee.Salary>=140001 && scope.newEmployee.Salary<=160000){
                        rightSalary = true;
                        console.log("Setting sr manager as true "+scope.newEmployee.Salary);
                    }else{
                        rightSalary = false;
                        console.log("Setting sr manager as false "+scope.newEmployee.Salary);
                    }
                }
                    
                //console.log(scope.totalEmployeeData[firstValueIndex].employeeSalary);
                    
                console.log("element.val"+element.val());
                
            var defer = $q.defer();
            $timeout(function(){
                //scope.selectedDesignation = tempDesignation;
                model.$setValidity('designationValidation', rightSalary); 
                defer.resolve;
            }, 1500);
            return defer.promise;
            };
            }else{
                
                model.$asyncValidators.salaryValidation = function (){
    
                var rightSalary = false;
                
                var tempDesignation= scope.selectedDesignation;
                    
                var firstValueIndex = scope.editEmpIndex;
                
                if(scope.selectedDesignation=="Consultant"){
                    if(scope.editEmployee.Salary>=40000 && scope.editEmployee.Salary<=60000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Snr. Consultant"){
                    if(scope.editEmployee.Salary>=60001 && scope.editEmployee.Salary<=80000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Lead"){
                    if(scope.editEmployee.Salary>=80001 && scope.editEmployee.Salary<=100000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Asst. Manager"){
                    if(scope.editEmployee.Salary>=100001 && scope.editEmployee.Salary<=120000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Manager"){
                    if(scope.editEmployee.Salary>=120001 && scope.editEmployee.Salary<=140000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }else if(scope.selectedDesignation=="Snr. Manager"){
                    if(scope.editEmployee.Salary>=140001 && scope.editEmployee.Salary<=160000){
                        rightSalary = true;
                    }else{
                        rightSalary = false;
                    }
                }
                    
                console.log(scope.totalEmployeeData[firstValueIndex].employeeSalary);
                    
                console.log("scope.newEmployee.Salary"+scope.editEmployee.Salary);
                
            var defer = $q.defer();
            $timeout(function(){
                scope.selectedDesignation = tempDesignation;
                model.$setValidity('designationValidation', rightSalary); 
                defer.resolve;
            }, 1500);
            return defer.promise;
            };
            }
        }
    }
}]);